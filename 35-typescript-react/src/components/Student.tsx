import React from 'react';

// Student 컴포넌트의 props 타입 정의
interface StudentInfo {
    name: string;
    grade: number;
    part?: string; // 있어도 되고 없어도 되는 props!
    handleClick: (name: string, grade: number) => void;
}

// #1. 'function' 선언형 컴포넌트의 타입 정의 ** 이게 중요
// - React.FC 사용 안함.
// export default function Student({
//     name,
//     grade,
//     part,
//     handleClick,
// }: StudentInfo) {
//     return (
//         <div onClick={() => handleClick(name, grade)}>
//             <li>이름 : {name}</li>
//             <li>학년 : {grade}</li>
//             <li>전공 : {part || '자유 전공'}</li>
//         </div>
//     );
// }

// #2. '화살표' 함수 컴포넌트 타입 정의
// - React.FC 사용 해도 되고 안해도 됨.

/**
 * 'React.FC'
 * - React.FunctionComponent 리액트 함수형 컴포넌트를 정의할 때 유용한 타입 정의 도구.
 * - 'chilren' 자동 포함
 * : 기본적으로 'children' prop을 자동으로 포함함.
 * : 'childer'이 필요 없으면, 안쓰고 직접 'props' 타입을 정의하는게 더 나음
 *
 *
 * - why? - "지양하는 편"
 * - children이 존재한다는 가정하에 사용하기 때문데 TS를 사용하는 의미가 있냐?
 * - children의 타입을 명확하게 안해줌. - TS 쓰는 이유가 있냐?
 * - children의 타입을 명확하게 해주면? - React.FC 뭐하러 쓰냐?
 */

// 1. 사용 ver
// // - 인터페이스 & 제너릭
// const Student: React.FC<StudentInfo> = ({ name, grade, part, handleClick }) => {
//     return (
//         <div onClick={() => handleClick(name, grade)}>
//             <li>이름 : {name}</li>
//             <li>학년 : {grade}</li>
//             <li>전공 : {part || '자유 전공'}</li>
//         </div>
//     );
// };

// 2. 사용 안한 ver *** 이게 중요
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
    return (
        <div onClick={() => handleClick(name, grade)}>
            <li>이름 : {name}</li>
            <li>학년 : {grade}</li>
            <li>전공 : {part || '자유 전공'}</li>
        </div>
    );
};

export default Student;
