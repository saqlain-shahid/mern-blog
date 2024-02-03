import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signOutSuccess } from '../redux/user/userSlice'

const DashSidebar = () => {
    const location = useLocation()
    const [tab, setTab] = useState('')
    const dispatch = useDispatch();

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search]);

  //signout functionality
const handleSignOut = async () => {
  try {
    const res = await fetch('/api/user/signout',{
      method: 'POST',
    })
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    }
    else{
      dispatch(signOutSuccess());
    }
  } catch (error) {
    console.log(error.message)
  }
}
  return (
    <Sidebar className='w-full md:w-56'>
        <SidebarItems>
            <SidebarItemGroup>
                <Link to={'/dashboard?tab=profile'}>
                <SidebarItem active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark' as='div'>
                    Profile
                </SidebarItem>
                </Link>
                <SidebarItem icon={HiArrowSmRight} className='cursor-pointer' onClick={handleSignOut}>
                    Sign Out
                </SidebarItem>
            </SidebarItemGroup>
        </SidebarItems>
    </Sidebar>
  )
}

export default DashSidebar