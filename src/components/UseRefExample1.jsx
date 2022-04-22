import React, {useRef} from 'react';

const UseRefExample1 = () => {
    const inputRef = useRef()
    const paraRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText='Goodbye'

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className={'label'}>Name</label>
                <div className="input-group w-full">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search…"
                        className="input input-bordered w-full"/>
                    <button className="btn btn-square" type={'submit'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
                <p onClick={()=>inputRef.current.focus()} ref={paraRef}>Hello</p>
            </form>
        </div>
    );
};

export default UseRefExample1;
