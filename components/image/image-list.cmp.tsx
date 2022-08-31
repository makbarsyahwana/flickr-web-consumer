import { useEffect, useState, useCallback } from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Images() {
    const [images, setImages] = useState([] as any)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchFeed()
    }, [])

    const fetchFeed: any = async () => {
        try {
          const { data } = await axios.get('/api/flicker-image-feed')
          console.log(data)
        } catch (e) {
          console.log(e)
        }
      }

    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}