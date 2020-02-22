import React from "react";

import { useForm } from "react-hook-form";

import styled from "styled-components";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import Input from "../Input/Input";

function Contact({ className, ...props }) {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <h1>Contact Us</h1>
      <Label required>Email</Label>
      <Input
        name="email"
        ref={register({
          required: "You must input an email address",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      ></Input>
      {errors.email && errors.email.message}
      <Label>Message</Label>
      <Textarea
        name="message"
        ref={register({ required: "You must input a message" })}
      ></Textarea>
      {errors.message && errors.message.message}
      <div>
        <Button type="submit">SUBMIT</Button>
      </div>
    </form>
  );
}

export default styled(Contact)`
  display: flex;
  flex-direction: column;

  * {
    margin-bottom: 8px;
  }
`;
