import { MdAccessTime } from 'react-icons/md';
import card from '../../assets/home-slider.jpg';

const NewsCard = () => {
    return (
        <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
    );
};

export default NewsCard;