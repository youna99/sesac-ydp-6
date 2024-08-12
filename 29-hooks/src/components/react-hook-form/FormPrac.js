import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormPrac() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onValid = (data) => {
        console.log('onValid >>>', data);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onValid)}>
            <input type="text" placeholder='name' {
                ...register('username', {
                    required: '이름은 필수 항목입니다.'
                })
            }/>
            {errors.username?.message}
            <input type="number" placeholder='age' {
                // ...register('age',{
                //     validate: {
                //         zero: (v) => v >= 0 || '0이상의 숫자만 입력 가능합니다.'
                //     }
                // }
                // )
                ...register('age', {
                    min: {
                        value: 0,
                        message: '0이상의 숫자만 입력 가능합니다.'
                    }
                })
            }/>
            {errors.age?.message}
            <button type='submit'>제출</button>
        </form>
    </div>
  )
}
