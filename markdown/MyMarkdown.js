import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
// import firstPost from './firstPost.js'

class MyMarkdown extends Component {
    render () {
        const {input} = this.props
      {/*  const input = '# [Authors](http://192.168.99.102:8080/api/collections/get/Author)\n\nHere is a json-list of all the authors'  */}
        return (
            <ReactMarkdown  className='post' source={input} />
        )
    }
}

export default MyMarkdown
