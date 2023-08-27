import {Card,Grid,Typography,Avatar,AppBar, Toolbar, IconButton} from "@material-ui/core" 
import Button from "@material-ui/core/Button";
const Uploaded = ({image,url}) => {

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    alert('Link copied');
  }

  return (
    <div>
      
      <div>
       <p className='font-normal text-md sm:text-xl text-center'>Uploaded Successfully!</p>
      </div>
      <div>
        <img src={image}  className='max-w-full mx-auto h-[10vh] mt-4 rounded-md'/>
      </div>
      <div className='relative bg-light-grey p-4 overflow-auto w-full h-12 mt-6 rounded-lg text-xs  align-middle overflow-hidden'>
        {url}
        <button onClick={copy} className='absolute w-1/5 right-1 top-1 bottom-1 bg-blue text-white rounded-lg md:px-4 md:py-1 md:text-xs text-[8px]'>Copy</button>
      </div>

    </div>
  )
}

export default Uploaded