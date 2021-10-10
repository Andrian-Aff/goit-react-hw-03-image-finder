import s from './ImageGallery.module.css'
// import ImageGalleryItem from '../ImageGalleryItem'


export default function ImageGallery() {
    return(
    <ul className={s.ImageGallery}>
    {this.props.children}
    </ul>
    )
}