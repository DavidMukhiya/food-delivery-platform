import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const AddRestaurentComponent = () => {
  return (
    <div>
        <Form>
            <FormGroup>
                <Label for='restaurantName' className='visually-hidden'>
                    Restaurant Name
                </Label>
                <Input
                    id='restaurantName'
                    name='email'
                    placeholder='Restaurant Name *'
                    type='email'
                />
            </FormGroup>
        </Form>
    </div>
  )
}

export default AddRestaurentComponent