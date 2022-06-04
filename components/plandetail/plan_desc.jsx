import React from 'react';

const PlanDesc = (props) => {

    const { data } = props;

    return (
        <>
            <section className='mb-8 mx-5'>
                <div>
                    <h3 className='text-base font-semibold mb-3' style={{ letterSpacing: '-0.32px' }}>어떤 계획인가요?</h3>
                    <div className='mt-4'>
                        <div className='text-sm textGray2' style={{ letterSpacing: '-0.28px' }}>
                            <pre className="max-w-full whitespace-pre-wrap">{data.description}</pre>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanDesc;