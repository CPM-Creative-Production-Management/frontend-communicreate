import React from 'react'
import { Card } from 'semantic-ui-react'
import { Form, TextArea, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { updateRequest } from '../../../actions'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import { regularApiRequest } from '../../api/regularApiRequest'
import { base_url } from '../../..'
import { useNavigate } from 'react-router-dom'
import { showToast } from '../../../App'

const AddRequestPage = () => {

    const globalRequest = useSelector(state => state.currRequest)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdateRequest = (event) => {
        console.log('called')
        dispatch(updateRequest({
            ...globalRequest, [event.target.name]: event.target.value
        }))
    }

    const handleUpdateRequestResponseDate = (event, data) => {
        const date = data.value
        console.log(event)
        if (!date) return
        const offset = date.getTimezoneOffset()
        const dateOffset = new Date(date.getTime() - (offset*60*1000))
        const dateString = dateOffset.toISOString().split('T')[0]
        dispatch(updateRequest({
            ...globalRequest, ['response_deadline']: dateString
        }))
    }

    const handleUpdateRequestCompleteDate = (event, data) => {
        const date = data.value
        console.log(event)
        if (!date) return
        const offset = date.getTimezoneOffset()
        const dateOffset = new Date(date.getTime() - (offset*60*1000))
        const dateString = dateOffset.toISOString().split('T')[0]
        dispatch(updateRequest({
            ...globalRequest, ['complete_deadline']: dateString
        }))
    }

    const handleAddTask = () => {
        dispatch(updateRequest({
            ...globalRequest, ['tasks']: [...globalRequest.tasks, {
                name: "",
                description: ""
            }]
        }))
    }

    const handleDeleteTask = (event) => {
        const index = event.target.name
        const newTasks = globalRequest.tasks.filter((task, i) => i != index)
        console.log(newTasks)
        dispatch(updateRequest({
            ...globalRequest, ['tasks']: newTasks
        }))
    }

    const handleUpdateTask = (event) => {
        const taskId = event.target.name.split('-')[2]
        const taskField = event.target.name.split('-')[1]
        const newTasks = globalRequest.tasks.map((task, index) => {
            if (index == taskId) {
                return {
                    ...task, [taskField]: event.target.value
                }
            } else {
                return task
            }
        })
        dispatch(updateRequest({
            ...globalRequest, ['tasks']: newTasks
        }))
    }

    const submitRequest = async () => {
        const reqBody = {
            name: globalRequest.name,
            description: globalRequest.description,
            comp_deadline: globalRequest.complete_deadline,
            res_deadline: globalRequest.response_deadline,
            tasks: globalRequest.tasks
        }
        console.log(reqBody)
        const response = await regularApiRequest({
            url: base_url + 'request',
            method: 'POST',
            reqBody: reqBody
        })
        if (response.status === 200) {
            showToast('Request added succesfully', 'success')
            navigate('/')
        } else {
            showToast('Error adding request', 'error')
        }
    }

    return (
        <div>
            <br></br>
            <h1>{globalRequest.name}</h1>
            <Card className='p-4' fluid>
                <Card.Meta className='mb-3'>
                    <h3>New Request</h3>
                </Card.Meta>
                <Form>
                <Form.Input name='name' onChange={handleUpdateRequest} fluid placeholder='Title'>
                </Form.Input>
                <TextArea name='description' placeholder="A detailed description of your project..." onChange={handleUpdateRequest}/>
                </Form>
                <h4>Response Deadline</h4>
                <SemanticDatepicker onChange={handleUpdateRequestResponseDate} />
                <h4>Completion Deadline</h4>
                <SemanticDatepicker onChange={handleUpdateRequestCompleteDate} />
                <Button className='mt-3' primary onClick={handleAddTask}>Add Task</Button>
                {globalRequest.tasks.map((currTask, index) => (
                    <Card className='p-4' fluid>
                        <Card.Meta className='mb-3'>
                            {currTask.name ? <p>{currTask.name}</p> : <p>New Task</p>}
                        </Card.Meta>
                        <Form>
                            <Form.Input name={'task-name-' + index} onChange={handleUpdateTask} value={currTask.name} fluid placeholder='Title' />
                            <TextArea name={'task-description-' + index} value={currTask.description} placeholder="A detailed description of your task..." onChange={handleUpdateTask} />
                        </Form>

                        <Button className='mt-3' primary name={index} onClick={handleDeleteTask}>Delete</Button>
                    </Card>
                ))}
                <Button primary onClick={submitRequest} className='mt-3'>Submit</Button>
            </Card>
        </div>
    )
    }

export default AddRequestPage