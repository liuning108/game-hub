

import noImage from '../assets/no-image-placeholder.webp'  

const getCroppedImageUrl = (url:string) => {
  if (!url) return noImage
  const target = 'media/'
  const source = url
  const index = source.indexOf(target) + target.length
  console.log(source.slice(0,index) + 'crop/600/400/' + source.slice(index))
  return source.slice(0,index) + 'crop/600/400/' + source.slice(index)
}

export default getCroppedImageUrl