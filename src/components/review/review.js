import './review.css'

function Review(){

    return(
 
        <>
        <div className="mainReview">
        <h2 className='titleReview'>Ils ont aimé notre vision</h2>
            <div className="review">
                <img src="sauvageb.jpeg" className='imgReview'/>
                <p className="textReview">KORO est la meilleure <br/>application pour la culture.</p>
                <p className='authorReview'>Boris S.⭐⭐⭐⭐</p>
            </div>
            <div className="review">
                <img src="steve.jpg" className='imgReview'/>
                <p className="textReview"> Une belle communauté <br/>basée sur le partage !</p>
                <p className='authorReview'>Steve L. ⭐⭐⭐⭐</p>
            </div>
            <div className="review">
                <img src="francois.jpg" className='imgReview'/>
                <p className="textReview">Je dis oui ! Oui, à KORO ! <br/>Je chante Koro ! Vive KORO !</p>
                <p className='authorReview'>Francois L.⭐⭐⭐⭐</p>
            </div>
      
        </div>
        </>
     
    );
}

export default Review;
