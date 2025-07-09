import { useEffect } from 'react'

export default function LocalStorage(key, value) {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
}

export function getStorage() {
    const saved = localStorage.getItem('todos')
    return saved
        ? JSON.parse(saved)
        : [
              { id: 1, text: '공부하기', checked: true },
              { id: 2, text: '코딩하기', checked: false },
              { id: 3, text: '운동하기', checked: false },
          ]
}

export function setStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}
