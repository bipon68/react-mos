import React, { FormEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData{
    name: string;
    age: number;
}


const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    // const [person, setPerson] = useState({
    //     name: '',
    //     age : 0
    // })

    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null)
    // const person = {name: '', age: 0}

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     console.log(person)
    //     if(nameRef.current !==null)
    //         person.name = nameRef.current.value;
    //         // console.log(nameRef.current.value)
    //     if(ageRef.current !==null)
    //         person.age = parseInt(ageRef.current.value)
    //         // console.log(ageRef.current.value)
    //     console.log(person)
    // }

    const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        {/* <input onChange={(event) => setPerson({...person, name: event.target.value})} value={person.name} id="name" type="text" className="form-control" /> */}
        <input {...register('name', {required: true, minLength: 3})} id="name" type="text" className="form-control" />
        {errors.name?.type === 'required' && <p className="text-danger">The name field is required</p>}
        {errors.name?.type === 'minLength' && <p className="text-danger">The name must be at least 3 character</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        {/* <input onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})} value={person.age} id="age" type="number" className="form-control" /> */}
        <input {...register('age')} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
