

function CareScale({ careTime }) {
    // const frequency = ['day', 'night', 'day and night']

    let care;
    if (careTime === 'day') {
        care = '🌞'
    }else if (careTime === 'night') {
        care = '🌑'
    }else if (careTime === 'day and night') {
        care = '🌞 & 🌑' 
    }else{
        care = 'Unknown'
    } 

    return (
        <div>
            {care}
        </div>
    )
}

export default CareScale
