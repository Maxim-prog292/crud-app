import React from "react";
import { Button, ButtonGroup, Input, FormGroup } from 'reactstrap';

export default function AddWindow({onEdit, setName, setLastname,setBday,setColor, onPost, onPut, idForEdit}) {
    console.log(idForEdit)
    return (
        <div className="profile-add-window">
            <Button color="primary" className="profile-add-close" onClick={() => onEdit()}>&#215;</Button>

            <FormGroup className="input-group">
            <Input className="profile-input-name" type='text' onChange={setName} placeholder='name'/>
            <Input className="profile-input-lastname" type='text' onChange={setLastname} placeholder='lastname'/>
            <Input className="profile-input-bday" type="date" onChange={setBday}/>
            <Input className="profile-input-color" type="color" onChange={setColor}/>
            </FormGroup>
            
            <ButtonGroup>
                <Button  color="success" className="profile-edit-buuton" onClick={() => {
                    onEdit();
                    onPost();
                }}
                >Add</Button>
                <Button color="success" disabled={idForEdit === '' ? true : false} className="profile-update-buuton" onClick={() => {
                    onEdit();
                    onPut();
                }}
                >Update</Button>
            </ButtonGroup>
            
        </div>
    ) 
}