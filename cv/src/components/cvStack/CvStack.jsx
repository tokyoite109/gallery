import React, { useState} from "react";
import { Container, Row, Col, InputGroup, FormControl, Breadcrumb } from 'react-bootstrap';
import './cvStack.css'

const Stack = () => {
    const Tools= [
        {
            id: 1,
            name: 'HTML'
        },
        {
            id: 2,
            name: 'CSS',
        },
        {
            id: 3,
            name: 'Javascript',
        },
        {
            id: 4,
            name: 'Git',
        },
        {
            id: 5,
            name: 'React',
        },
    ]


    const [search, setSearch] = useState('')
  
    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const filteredTools = Tools.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Stack</Breadcrumb.Item>
        </Breadcrumb>
        <div className='stack-container'>
            <h1>Stack</h1>
            <Container   style={{padding: '50px'}}>
                <div className='searchInputArea'>
                    <InputGroup >
                        <FormControl placeholder='Search' value={search} onChange={handleInput}>
                        </FormControl>
                    </InputGroup> 
                </div>        
                <Row className='stack-columnTitles'>
                    <Col className='column' sm={3}>Name</Col>
                </Row>

                {filteredTools.map(tool => (
                <Row key={tool.id} className='tool'>
                    <Col className='column' sm={6}>{tool.name}</Col>
                </Row>
                ))}
            </Container>
        </div>
        </>
    )
}

export default Stack