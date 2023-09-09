import React from 'react';
import { Card, Divider, Grid, Icon, Message } from "semantic-ui-react";


import '../../global.css'
import { DashboardCard } from "../cards/DashboardCard";
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import GeneralChart from '../utils/GeneralChart'
import { useApiRequest } from '../api/useApiRequest';
import { base_url } from '../..';
import { Stack } from 'react-bootstrap';
import ReviewCard from '../cards/ReviewCard';


export const Dashboard = () => {

    let navigate = useNavigate();

    const { data, dataLoading, error } = useApiRequest({
        url: base_url + 'dashboard',
        method: 'GET',
    })


    return (
        <div className='ms-2'>
            {/* <Button onClick={() => {
                        navigate("/add-estimation")
                    }} primary className='mt-3 fab' size='large' >Add new Estimation</Button> */}




            <Grid columns={5}>
                <Grid.Row>
                    <Grid.Column>

                        <DashboardCard iconName='forward' colorName='teal' cardHeader='Ongoing Projects'
                            cardDesc='These are the estimations that you have started but not yet completed. Negotiation is going on with the clients.'
                            count={data?.ongoingProjects} onClick={() => navigate('/estimations')} />


                    </Grid.Column>

                    <Grid.Column>

                        <DashboardCard iconName='check' colorName='green' cardHeader='Completed Projects'
                            cardDesc='These are the estimations that have been accepted.
                                    You can now start working on the projects.'

                            count={data?.completedProjects} onClick={() => navigate('/archive')} />

                    </Grid.Column>

                    <Grid.Column>


                        <DashboardCard iconName='close' colorName='red' cardHeader='Rejected Projects'

                            cardDesc='These are the estimations that have been rejected by the clients or by you.'

                            count={data?.rejectedProjects} onClick={() => navigate('/archive?type=1')} />



                    </Grid.Column>


                </Grid.Row>


            </Grid>



            <Grid columns={2}>
                <Grid.Row>

                    <Grid.Column width={6} >
                        <Card fluid>

                            <Card.Content header='Projects Per Year' />
                            <Card.Content>
                                <GeneralChart userData1={data?.pieChart}
                                    labelFieldName={'year'} dataFieldName={'projects'}
                                    type={'DOUGHNUT'} color={'rgba(53, 162, 235, 0.5)'}
                                />
                            </Card.Content>

                        </Card>
                    </Grid.Column>

                    <Grid.Column width={10} >
                        <Card fluid>

                            <Card.Content header='Budget Per Year' />
                            <Card.Content>
                                <GeneralChart userData1={data?.barChart} label1='Budget'
                                    labelFieldName={'year'} dataFieldName={'budget'}
                                    type={'BAR'} color={'rgba(53, 162, 235, 0.5)'}
                                />
                            </Card.Content>

                        </Card>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>

                    <Grid.Column width={16}>
                        <Card fluid>

                            <Card.Content header='Success Trend' />
                            <Card.Content>
                                <GeneralChart userData1={data?.lineChart} userData2={data?.lineChart}
                                    label1='Accepted' label2='Rejected'
                                    labelFieldName={'year'} dataFieldName={'accepted'} dataFieldName2={'rejected'}
                                    type={'LINE'} color={'rgba(53, 162, 235, 0.5)'}
                                />
                            </Card.Content>

                        </Card>
                    </Grid.Column>

                </Grid.Row>

            </Grid>

            <h3>Reviews</h3>

            {/* <Button loading={uploadingImg} onClick={handleSaveChanges} color='blue' className='mt-3'>Save Changes</Button> */}

            <Grid columns={2}>
                
            {data?.review?.map((review) => {
                return (
                    <Grid.Column>
                    <div className='mb-3'>
                        <ReviewCard
                            companyName={review.Company.name}
                            title={review.title}
                            text={review.description}
                            companyLogo={review.Company.logo}
                            rating={review.rating}
                            key={review.id}
                        />
                    </div>
                    </Grid.Column>
                )
            })
            }
            </Grid>



        </div>
    );
}