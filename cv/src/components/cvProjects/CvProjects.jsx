import React, { useState} from "react";
import { Container, Row, Col, InputGroup, FormControl, Breadcrumb} from 'react-bootstrap';
import './cvProjects.css'

const Projects = () => {
    const Projects = [
        {
            id: 1,
            name: 'Google',
            image: '',
            description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
            created_date: 1998,
        },
        {
            id: 2,
            name: 'Facebook',
            image: '',
            description: 'Meta Platforms, Inc., also known as Meta and formerly known as Facebook, Inc., is a multinational technology conglomerate based in Menlo Park, California. The company is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries.',
            created_date: 2004,
        },
        {
            id: 3,
            name: 'Instagram',
            image: '',
            description: 'Instagram is an American photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger. In April 2012, Facebook Inc. acquired the service for approximately US$1 billion in cash and stock.',
            created_date: 2010,
        },
        {
            id: 4,
            name: 'Youtube',
            image: '',
            description: 'YouTube is an American online video sharing and social media platform owned by Google. It was launched on February 14, 2005 by Steve Chen, Chad Hurley, and Jawed Karim. It is the second most visited website, right after Google itself. ',
            created_date: 2005,
        },
        {
            id: 5,
            name: 'Linkedin',
            image: '',
            description: 'LinkedIn is an American business- and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.',
            created_date: 2002,
        },
    ]


    const [search, setSearch] = useState('')
  
    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const filteredProjects = Projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Projects</Breadcrumb.Item>
        </Breadcrumb>
        <div className='projects-container' >
            <h1>Projects</h1>
            <Container  style={{padding: '50px'}}>
                <div className='searchInputArea'>
                    <InputGroup >
                        <FormControl placeholder='Search' value={search} onChange={handleInput}>
                        </FormControl>
                    </InputGroup> 
                </div>        
                <Row className='projects-columnTitles'>
                    <Col className='column' sm={3}>Name</Col>
                    <Col className='column' sm={3}>Image</Col>
                    <Col className='column' sm={3}>Description</Col>
                    <Col className='column' sm={3}>Created Date</Col>
                </Row>

                {filteredProjects.map(project => (
                <Row key={project.id} className='project'>
                    <Col className='column' sm={3}>{project.name}</Col>
                    <Col className='column' sm={3}>{project.image}</Col>
                    <Col className='column' sm={3}>{project.description}</Col>
                    <Col className='column' sm={3}>{project.created_date}</Col>
                </Row>
                ))}
            </Container>
        </div>
        </>
    )
}

export default Projects