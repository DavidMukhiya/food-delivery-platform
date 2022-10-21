import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const AddRestaurentComponent = () => {
  return (
    <div>
        <Form >
            <FormGroup>
                <Label for='restaurantName' className='visually-hidden' style={{color: '#5B4F47'}}>
                    Restaurant Name
                </Label>
                <Input
                    id='restaurantName'
                    name='email'
                    placeholder='Restaurant Name *'
                    type='email'
                    style={{backgroundColor: '#DDC1A7', width:'25rem', margin:'auto'}}
                />
            </FormGroup>
            <FormGroup>
                <Label for='restaurantName' className='visually-hidden' style={{color: '#5B4F47'}}>
                    Restaurant Name
                </Label>
                <Input
                    id='restaurantName'
                    name='email'
                    placeholder='Restaurant Name *'
                    type='email'
                    style={{backgroundColor: '#DDC1A7', width:'25rem', margin:'auto'}}
                />
            </FormGroup>
            <FormGroup>
                <Label for='restaurantName' className='visually-hidden' style={{color: '#5B4F48'}}>
                    Restaurant Name
                </Label>
                <Input
                    id='restaurantName'
                    name='email'
                    placeholder='Restaurant Name *'
                    type='email'
                    style={{backgroundColor: '#DDC1A7', width:'25rem', margin:'auto'}}
                />
            </FormGroup>
        </Form>
    </div>
  )
}

export default AddRestaurentComponent