 
 const ComponentHolder = ({onPageChange,page}) => {
    const getBackgroundColor = ()=> {
        if(page === 'section1') return 'bg-section1';
        if(page === 'section2') return 'bg-section2';
        return 'bg-default';
            }

    return(
        <>
            <div>
                <button onClick={()=> onPageChange('section1')}>Component 1</button>
                <button onClick={()=> onPageChange('section2')}>Component 2</button>
              
            </div>
            <br></br>
            <div className={`main-content ${getBackgroundColor()}`}>
                
            </div>
        
        </>
    )


 }
 export default ComponentHolder