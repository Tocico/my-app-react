import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: '0',
                description: 'beautiful landscape',
                imageLink: 'https://picsum.photos/300/300'
            },
            {
                id: '1',
                description: 'beautiful random',
                imageLink: 'https://picsum.photos/400/400'
            },
            {
                id: '2',
                description: 'heeeej',
                imageLink: 'https://picsum.photos/500/500'
            }],

        }
        this.removePhoto = this.removePhoto.bind(this);
        console.log('constructor')
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

  

    componentDidMount() {
        // const data = SimulateFetchFromDatabase()
        // this.setState({
        //     posts: data
        // })
        // console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        //    alert('re-render')
        console.log(prevState.posts) // Content of posts array
        console.log(this.state) // Statement after removed Photo 
    }

    render() {
        // console.log('render')
        return (<div>
                    <Route exact path='/' render={() =>(
                    <div>
                        <Title title={'Photowall'} />
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                    </div>
                    )}/>
          
                    <Route path="/AddPhoto" render = {({history}) => (
                         <AddPhoto onAddPhoto = {(addedPost) => {
                             this.addPhoto(addedPost)
                             history.push('/') // history.goBack() fungerar också....
                             }}/>
                        )}/>
        </div>)
    }
}

// function SimulateFetchFromDatabase(){
//     return [{
//             id: '0',
//             description: 'beautiful landscape',
//             imageLink:'https://picsum.photos/id/237/300/300'
//         },
//         {
//             id: '1',
//             description: 'beautiful random',
//             imageLink:'https://picsum.photos/id/237/300/300'
//         },
//         {
//             id: '2',
//             description: 'heeeej',
//             imageLink:'https://picsum.photos/id/237/300/300'
//         }
//     ]
// }

export default Main
