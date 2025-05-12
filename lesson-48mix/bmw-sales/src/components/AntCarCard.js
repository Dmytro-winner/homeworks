import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

export default function AntCarCard() {
    return (
        <Card
            hoverable
            style={{ width: 300, margin: 16 }}
            cover={<img alt="BMW 7" src="https://cdn.bmwusa.com/img/BMW_7.png" />}
        >
            <Meta title="BMW 7 Series" description="Люкс-клас для найвимогливіших." />
            <Button type="primary" style={{ marginTop: 10 }}>Купити зараз</Button>
        </Card>
    );
}