import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import React from 'react'

const profileImage = ({ open, setOpen ,src}) => {
  return (
    <div className=''>
        <Dialog open={open} className='relative shadow-lg shadow-blue-600'>

            <DialogContent onInteractOutside={() => setOpen(false)}>
      
      
                <Avatar className="h-48 w-48 absolute  bottom-[50%] right-[50%]">
                            <AvatarImage src={src}  className='h-48 w-48 absolute left-50 top-0 rounded-full ' />
                        </Avatar>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default profileImage