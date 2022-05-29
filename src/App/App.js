import React from "react";
import { useState, useEffect } from "react";
import uniqid from 'uniqid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import axios from "axios";
import Section from "../Section";
import Header from "../Header";
import AddWindow from "../AddWindow";

export default function App () {
    const [array, setArray] = useState([]);
    const [edit, setEdit] = useState(false);
    const [profileName, setProfileName] = useState('');
    const [profileLastname, setProfileLastname] = useState('');
    const [profileBday, setProfileBday] = useState('');
    const [profileColor, setProfileColor] = useState('');
    const [idForEdit, setIdForEdit] = useState('')

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const result = await axios.get("http://localhost:3000/profile");
        console.log(result.data);
        setArray(result.data);
    }
    const delData = async (id) => {
        const result = await axios.delete(`http://localhost:3000/profile/${id}`);
        getData();
    }
    const postData = async () => {
        setEdit(!edit);
        const result = await axios.post("http://localhost:3000/profile", {
            name: name(),
            id: uniqid(),
            bday: profileBday,
            color: profileColor
        });
        getData();
    }
    const putData = async () => {
        await axios.put(`http://localhost:3000/profile/${idForEdit}`, {
            name: name(),
            id: idForEdit,
            bday: profileBday,
            color: profileColor
        });
        getData();
    }

    const isEdit = () => {
        setEdit(!edit);
    }
    const setName = (e) => {
        setProfileName(e.target.value);
    }
    const setLastname = (e) => {
        setProfileLastname(e.target.value);
    }
    const setBday = (e) => {
        setProfileBday(e.target.value);
        console.log(e.target.value);
    }
    const setColor = (e) => {
        setProfileColor(e.target.value);
    }
    const name = () => {
        let profileFullName = `${profileName} ${profileLastname}`;
        return profileFullName;
    }

    const getId = (id) => {
        setIdForEdit(id);
        console.log(id);
    }

    if (!edit) {
        return (
            <div className="main-app">
                <Header title="Profiles"/>
                <Section 
                    profile={array} 
                    onDelete={delData} 
                    onEdit={isEdit} 
                    getIdForEdit={getId}
                />
                <Button className="profile-add-button" onClick={isEdit}>Add profile</Button>
            </div>
        );
    } else {
        return (
            <AddWindow 
                onEdit={isEdit} 
                setName={setName} 
                setLastname={setLastname} 
                setBday={setBday}
                setColor={setColor}
                onPost={postData} 
                onPut={putData}
                idForEdit={idForEdit}
            />
        )
    }
}