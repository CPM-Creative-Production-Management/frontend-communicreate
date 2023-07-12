import React from "react";
import {Card, Icon} from "semantic-ui-react";
import "./card.css"
import {showToast} from "../../App";

export const DashboardCard = ({iconName, colorName, cardHeader, cardDesc, count}) => {

        return (
            <div>


                <Card style={{height: '300px'}} fluid>
                    <Card.Content>
                        <br/>

                        <div className='icon-bg'>
                            <Icon size={"huge"} color={colorName} name={iconName}/>
                        </div>

                        <br/><br/>


                        <Card.Header>{cardHeader}</Card.Header>
                        <br/>
                        <Card.Meta>
                            {cardDesc}
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra onClick={() => {
                        showToast(`${count} Estimations`, "success");
                    }}>
                        <a>
                            <Icon name='calculator'/>
                            {count} Estimations
                        </a>
                    </Card.Content>
                </Card>


            </div>
        );
}