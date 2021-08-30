import PuppyImg from '../assets/images/puppy.jpg';

function Profile() {
    return (
    <div className="card" style={{width: '18rem'}}>
        <img src={PuppyImg} alt='Dog'/>
        <div className="card-body">
            <h5 className="card-title">Cute Puppy</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam sollicitudin elit nec malesuada. Ut scelerisque vitae turpis in vestibulum.</p>
        </div>
    </div>
    );
}


export default Profile;