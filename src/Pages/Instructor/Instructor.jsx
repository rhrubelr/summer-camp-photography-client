import InstructorCart from './InstructorCart';
import InstructorHooks from '../../Hooks/InstructorHooks';
import { Helmet } from 'react-helmet';


const Instructor = () => {
    const [populars] = InstructorHooks();

    // useEffect(() => {
    //     fetch("https://photography-school-server.vercel.app/instructor")
    //         .then(res => res.json())
    //         .then(data => {
    //             setPopulars(data)
    //         })
    // }, [])
    return (
        <div>
            <Helmet>
                <title> Photography School | Instructor</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto my-10'>
                {
                    populars.map(popular =>
                        <InstructorCart
                            key={popular._id}
                            popular={popular}
                        ></InstructorCart>)
                }
            </div>
        </div>
    );
};

export default Instructor;