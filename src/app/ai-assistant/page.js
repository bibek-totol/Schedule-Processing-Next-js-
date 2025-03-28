"use client"
import React, { useState, useRef } from 'react';
import { DiCodeigniter } from "react-icons/di";
import Swal from 'sweetalert2';
import Loader from '../components/Loader';

const AIAssistant = () => {
    const [active, setActive] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const formRef = useRef(null);

    const formatCodeResponse = (content) => {
        if (!content.includes("```")) return content;
        
        return content.split("```").map((part, index) => {
            if (index % 2 === 1) {
                const languageMatch = part.match(/^(\w+)\n/);
                const language = languageMatch ? languageMatch[1] : '';
                const code = languageMatch ? part.replace(languageMatch[0], '') : part;
                
                return (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 my-4 overflow-x-auto">
                        <div className="text-gray-400 text-sm mb-2">{language || 'code'}</div>
                        <pre className="text-gray-100 whitespace-pre-wrap">
                            <code>{code}</code>
                        </pre>
                    </div>
                );
            }
            return <p key={index} className="my-2">{part}</p>;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setActive(true);
        setData(null);

        const form = new FormData(e.target);
        const inputt = form.get("inputt");

        if (!inputt) {
            Swal.fire("Error", "Please enter something", "error");
            return;
        }

        try {
            setInput(inputt);
            setLoading(true);
            
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "deepseek/deepseek-r1:free",
                    "messages": [{
                        "role": "user",
                        "content": `${(inputt.includes("What is") || inputt.includes("How to")) ? inputt : `What is ${inputt}`}`
                    }]
                })
            });

            const responseData = await response.json();
            setData(responseData);

            if (formRef.current) {
                formRef.current.reset();
            }

        } catch (error) {
            console.log(error);
            Swal.fire("Error", "Failed to get response from AI", "error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='min-h-[100vh] mt-10 p-8 bg-[#292A2D]'>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div>
                    <div className='flex gap-x-4'>
                        <DiCodeigniter className='text-4xl text-teal-500'/>
                        <h1 className='text-4xl font-bold text-teal-500'>Hi, I am fireseek(AI)</h1>
                    </div>
                </div>

                <div>
                    <p className='text-2xl font-bold text-teal-300'>How can I help you today?</p>
                </div>

                <div className='mt-10 w-full lg:w-1/2 mx-auto'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <textarea 
                            name='inputt' 
                            className='w-full h-32 text-white p-4 bg-gray-600 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-teal-500'
                            placeholder='Type your question here...'
                            disabled={loading}
                        />

                        {loading ? (
                            <Loader/>
                        ) : (
                            <button 
                                type='submit' 
                                className="mb-0 mt-3 inline-block outline-0 border-0 cursor-pointer no-underline relative text-black bg-white leading-[30px] rounded-[40px] p-[10px] text-[20px] font-semibold shadow-[-2px_-2px_0px_2px_rgb(255,198,0),0px_0px_0px_4px_rgb(246,84,174),0px_0px_2px_7px_rgba(0,0,0,0.05)] transition-all duration-200 hover:shadow-[-2px_-2px_0px_2px_rgb(246,84,174),0px_0px_0px_4px_rgb(255,198,0),0px_0px_2px_7px_rgba(0,0,0,0.05)] hover:scale-[1.01]"
                            >
                                Submit
                            </button>
                        )}
                    </form>
                </div>

                {active && (
                    <div className="chat chat-start w-full lg:w-1/2">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <DiCodeigniter className='text-4xl text-teal-500'/>
                            </div>
                        </div>
                        <div className="chat-bubble">{input}?</div>
                    </div>
                )}

                {data?.choices?.map((choice, index) => (
                    <React.Fragment key={index}>
                        <div className='w-full lg:w-1/2'>
                            <h1 className='text-2xl font-bold text-teal-300 mx-auto'>Reasoning</h1>
                            <p className='mt-4 text-gray-400'>{choice.message.reasoning}</p>
                        </div>

                        <div className="collapse bg-gray-600 w-full lg:w-1/2 border border-base-300">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title font-semibold">
                                {formatCodeResponse(choice.message.content)}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AIAssistant;