// write the component code here

export default function Usercard(){
    let profilePic = 'https://avatarfiles.alphacoders.com/326/thumb-1920-326406.jpg'
    let name = 'Shoyo'
    let mail = 'shoyo@gmail.com'
    let num = 9293145112
    let address = 'White house, washington DC'
    return(
        <div style={{border : "2px solid white"}}>
            <h1>{name}</h1>
            <img src={profilePic} alt="" height={300} width={300} />
            <h3>{mail}</h3>
            <h3>{num}</h3>
            <h3>{address}</h3>
        </div>
    );
}