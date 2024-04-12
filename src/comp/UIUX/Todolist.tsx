import React from 'react';
import '../style/todo.scss';


function Todolist() {
    return (
        <main className='todo'>
            <div className='today'>
                <h3>TODAY</h3>
                <h2>04.08</h2>
                <span>MON</span>
            </div>
            <article className='todoArticle'>
                <form>
                    <input type="text" placeholder='할 일을 입력하세요'/>
                    <img src="/images/addBlue.png" alt="addBlue" />
                </form>
                <p>오늘 할 일 : <span>2</span>개</p>
                <div className='checkList'>
                    <div className='check'>
                        <img src="/images/checkOff.png" alt="checkOff" />
                        <p>집 들어가면서 붕어빵 사먹기</p>
                    </div>
                    <div className='check'>
                        <img src="/images/checkOff.png" alt="checkOff" />
                        <p>올리브영 로션 사러가기</p>
                    </div>
                </div>

                <div className='pastList'>
                    {/* mappppppppppppppppppppppppp */}
                    <div className='pastDate'>
                        <p className='line'>
                            <span>2024-04-02</span>
                        </p>
                        <div className='past'>
                            <img src="/images/checkOn.png" alt="checkOn" />
                            <p>오늘은 배불리 먹고 푹 자기</p>
                        </div>

                        <div className='past'>
                            <img src="/images/checkOff.png" alt="checkOff" />
                            <p>벚꽃 보러 여의도한강 가기</p>
                        </div>
                    </div>

                    <div className='pastDate'>
                        <p className='line'>
                            <span>2024-04-01</span>
                        </p>
                        <div className='past'>
                            <img src="/images/checkOn.png" alt="checkOn" />
                            <p>심야영화 / 21:00 / 파묘 / 카라멜팝콘</p>
                        </div>

                        <div className='past'>
                            <img src="/images/checkOn.png" alt="checkOn" />
                            <p>미세먼지 좋으면 런닝하기</p>
                        </div>
                    </div>
                    {/* mappppppppppppppppppppppppp */}

                </div>
            </article>
        </main>
    );
}

export default Todolist;