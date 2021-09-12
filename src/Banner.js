import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import './Banner.css'
import Search from './Search'
import {useHistory}from 'react-router-dom'
function Banner() {
    const [showSearch, setShowSearch] = useState(false)
    const history = useHistory();
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search/>}
                <Button className='banner_searchButton' variant='outlined' onClick={()=>setShowSearch(!showSearch)}>{showSearch ? 'Hide'   :  'Search Dates' }</Button>
            </div>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>plan a different kind of getaway to uncover the hidden gems nerar you.</h5>
            <Button variant='outlined' onClick={()=> history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
