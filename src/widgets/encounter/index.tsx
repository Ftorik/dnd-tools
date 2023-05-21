import React, { useState, useEffect } from "react";
import { Transfer } from "antd";
import { TransferDirection } from "antd/es/transfer";

type ParticipantsType = {
    key: string;
    title: string;
    description: string;
    tag: string;
};

export function Encounter() {
    const [mockData, setMockData] = useState<ParticipantsType[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [targetKeys, setTargetKeys] = useState<string[]>([]);

    const onChange = (nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
        console.log("targetKeys:", nextTargetKeys);
        console.log("direction:", direction);
        console.log("moveKeys:", moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        console.log("sourceSelectedKeys:", sourceSelectedKeys);
        console.log("targetSelectedKeys:", targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const onScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
        console.log("direction:", direction);
        console.log("target:", e.target);
    };

    const getMock = () => {
        const tempSelectedKeys = [];
        const tmpMockData: ParticipantsType[] = [
            {
                key: "0",
                title: "player_1",
                description: "description of player_1",
                tag: "hero",
            },
            {
                key: "1",
                title: "player_2",
                description: "description of player_2",
                tag: "hero",
            },
            {
                key: "2",
                title: "player_3",
                description: "description of player_3",
                tag: "hero",
            },
            {
                key: "3",
                title: "player_4",
                description: "description of player_4",
                tag: "hero",
            },
            {
                key: "4",
                title: "player_5",
                description: "description of player_5",
                tag: "hero",
            },
            {
                key: "5",
                title: "enemy_6",
                description: "description of enemy_6",
                tag: "enemy",
            },
            {
                key: "6",
                title: "enemy_7",
                description: "description of enemy_7",
                tag: "enemy",
            },
            {
                key: "7",
                title: "enemy_8",
                description: "description of enemy_8",
                tag: "enemy",
            },
            {
                key: "8",
                title: "enemy_9",
                description: "description of enemy_9",
                tag: "enemy",
            },
            {
                key: "9",
                title: "enemy_10",
                description: "description of enemy_10.",
                tag: "dragon",
            },
            {
                key: "10",
                title: "enemy_11",
                description: "description of enemy_11.",
                tag: "dragon",
            },
            {
                key: "11",
                title: "enemy_12",
                description: "description of enemy_12.",
                tag: "dragon",
            },
            {
                key: "12",
                title: "enemy_13",
                description: "description of enemy_13.",
                tag: "dragon",
            },
            {
                key: "13",
                title: "enemy_14",
                description: "description of enemy_14.",
                tag: "dragon",
            },
            {
                key: "14",
                title: "enemy_15",
                description: "description of enemy_15.",
                tag: "dragon",
            },
            {
                key: "15",
                title: "enemy_16",
                description: "description of enemy_16.",
                tag: "dragon",
            },
            {
                key: "16",
                title: "enemy_17",
                description: "description of enemy_17.",
                tag: "dragon",
            },
            {
                key: "17",
                title: "enemy_18",
                description: "description of enemy_18.",
                tag: "dragon",
            },
            {
                key: "18",
                title: "enemy_19",
                description: "description of enemy_19.",
                tag: "dragon",
            },
            {
                key: "19",
                title: "enemy_20",
                description: "description of enemy_20.",
                tag: "dragon",
            },
        ];
        for (let i = 0; i < tmpMockData.length; i++) {
            if (i < 3) {
                tempSelectedKeys.push(tmpMockData[i].key);
            }
        }
        setMockData(tmpMockData);
        setSelectedKeys(tempSelectedKeys);
    };

    useEffect(() => {
        getMock();
    }, []);

    return (
        <Transfer
            dataSource={mockData}
            showSearch
            oneWay
            operations={[`To Encounter ⚔️`]}
            titles={["Participants", "Encounter"]}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            onScroll={onScroll}
            render={(item: ParticipantsType) => item.title}
            style={{ backgroundColor: "whitesmoke" }}
            listStyle={{
                width: 300,
                height: 500,
            }}
        />
    );
}
