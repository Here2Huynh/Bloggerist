import React, { Component } from 'react';
import './Blog.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost'
import asyncComponent from '../../hoc/asyncComponents' 

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className='Blog' >
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to='/posts/' 
                                    exact
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'}}>
                                New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {/* Guards use case */}
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null }
                    {/* <Route path='/new-post' component={NewPost} /> */}
                    <Route path='/posts' component={Posts} />
                    {/* catch all route but does not work with redirect */}
                    <Route render={() => <h1> Not Found</h1> } />
                    {/* <Redirect from='/' to='/posts' />  */}
                    {/* <Route path='/' component={Posts} /> */}
                </Switch>
                
                {/* <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;

// absolute path
// to="/some-path"
// relative path
// this.match.url + /path