import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { upsert, allowed_fields } from "../../DB/missingPeople";
import { handle_submit } from "../../utils/formUtils";
const { Group, Label, Control, Text, File } = Form;

const MissingPersonForm = ({ data, id }) => {

  const { phoneNbr, fullName, location, description } = data || {};
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [errors, setErrors] = useState([]);

  const closeAlert = (keyToRemove) => () => {
    setErrors(errors.filter(({ key }) => key !== keyToRemove));
  };


  const onSubmit = isSubmitting ? undefined: handle_submit((data, form) => {
    errors.length &&  setErrors([])
    setIsSubmitting(true)
    upsert(id, data)
      .then(()=>{
        // TODO: flash a thank you message
        console.log("ok!")
        form.reset()
        setIsSubmitting(false)
      })
      .catch(err => {
        if(Array.isArray(err)){
          setErrors(err)
        }else{
          console.error(err)
        }
        setIsSubmitting(false)
      })
  }, allowed_fields);

  return (
    <Form onSubmit={onSubmit}>
      {errors &&
        errors.map(({ key, name, text }) => {
          return (
            <Alert
              key={key}
              variant="danger"
              onClose={closeAlert(key)}
              dismissible
            >
              <p>{text}</p>
            </Alert>
          );
        })}

      <Group>
        <Label>Your Phone Number</Label>
        <Control
          name="phoneNbr"
          type="tel"
          placeholder="03123456"
          defaultValue={phoneNbr}
        />
        <Text className="text-muted">Your phone number</Text>
      </Group>

      <hr />

      <Group>
        <Label>Name</Label>
        <Control
          name="fullName"
          type="text"
          placeholder="FirstName LastName"
          defaultValue={fullName}
        />
        <Text className="text-muted">
          The name of the person you're looking for
        </Text>
      </Group>

      <Group>
        <Label>Location</Label>
        <Control
          name="location"
          type="text"
          placeholder="Hamra"
          defaultValue={location}
        />
        <Text className="text-muted">Last place the person was seen</Text>
      </Group>

      <Group>
        <Label>Photo</Label>
        <File name="photo" label="Upload a photo" accept="image/*"/>
        <Text className="text-muted">
          Please select a good photo of the person
        </Text>
      </Group>

      <Group>
        <Label>Description</Label>
        <Text className="text-muted">
          Enter as much detail as you can. Please try to be clear
        </Text>
        <Control
          name="description"
          as="textarea"
          rows="3"
          defaultValue={description}
        />
      </Group>
      <Button disabled={isSubmitting} variant="primary" type="submit">
        { isSubmitting ? "Please wait..." : "Submit"}
      </Button>
    </Form>
  );
};

export default MissingPersonForm;
