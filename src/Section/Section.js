import React from "react";
import { Button, ButtonGroup, Card, CardImg, CardBody, CardTitle } from "reactstrap";

export default function Section ({profile, onDelete, onEdit,getIdForEdit}) {
    if(profile.length !== 0) {
        return (
            <section className="section-app">
                {profile.map(({name, id, bday, color}) => {
                    return (
                        <Card className="profile" key={id} id={id} style={{background: color}}>
                            <CardBody>
                                <CardTitle tag="h5" className="profile-name">
                                    Name: {name}
                                </CardTitle>
                                <CardTitle tag="h5" className="profile-bday">
                                    Bday: {bday}
                                </CardTitle>
                                <ButtonGroup>
                                    <Button className="profile-delete" color="danger" onClick={() => onDelete(id)}>
                                        Delete
                                    </Button>
                                    <Button className="profile-update" color="warning" onClick={(e) => {
                                        onEdit();
                                        getIdForEdit(e.target.parentNode.parentNode.parentNode.id);
                                        }}>
                                        Update
                                    </Button>
                                </ButtonGroup>
                                
                            </CardBody>
                        </Card>
                    )
                }
            )}
            </section>
        )
        
    } else {
        return (
            <section className="section-app no-data">
                <h1>NO DATA</h1>
            </section>
        )
    }
    
}