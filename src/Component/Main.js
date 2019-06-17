import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'




class Main extends Component{
    constructor(){
        super()
        this.state = {
            posts: [
                {
                    id: '0',
                    description: 'beautiful landscape',
                    imageLink:'https://picsum.photos/id/237/300/300'
                },
                {
                    id: '1',
                    description: 'beautiful random',
                    imageLink:'https://picsum.photos/id/237/300/300'
                },
                {
                    id: '2',
                    description: 'heeeej',
                    imageLink:'https://picsum.photos/id/237/300/300'
                }
            ]
        }
    }
    render(){
       return <div>
           <Title title ={'Photowall'}/>
           <PhotoWall posts={this.state.posts}/>
       </div>
    }
}

export default Main
