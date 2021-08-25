import React, {Component} from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className="bg-pink tc bw2 br4 grow shadow-5 pa3 ma2 dib">
            <img src={`https://robohash.org/${id}/200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;