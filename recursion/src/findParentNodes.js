// 匹配树形数据并将父级推入数组
function findParentNodes(tree, ID, parents = []) {
    for (const node of tree) {
        if (node.ID === ID) {
            // 找到匹配的节点，将其父级节点推入数组
            return [...parents, node];
        }
        if (node.CHILD) {
            // 递归查找子节点
            const result = findParentNodes(node.CHILD, ID, [...parents, node]);
            if (result) {
                return result;
            }
        }
    }
    return null; // 未找到匹配的节点
}

// 调用函数并传入树形数据和要匹配的id
const treeData = [
    {
        "ID": "1",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": "测试专辑",
        "LEVEL": "0",
        "CHILD": [
            {
                "ID": "3",
                "PID": "1",
                "AL_ID": "1",
                "ANAME": "测试文件夹",
                "LEVEL": "1"
            },
            {
                "ID": "4",
                "PID": "1",
                "AL_ID": "1",
                "ANAME": "测试文件夹2",
                "LEVEL": "1"
            },
            {
                "ID": "5",
                "PID": "1",
                "AL_ID": "1",
                "ANAME": "测试文件夹3",
                "LEVEL": "1",
                "CHILD": [
                    {
                        "ID": "6",
                        "PID": "5",
                        "AL_ID": "1",
                        "ANAME": "测试文件夹4",
                        "LEVEL": "2"
                    }
                ]
            }
        ]
    },
    {
        "ID": "2",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": "测试专辑2",
        "LEVEL": "0",
        "CHILD": [
            {
                "ID": "7",
                "PID": "2",
                "AL_ID": "2",
                "ANAME": "测试文件6",
                "LEVEL": "1"
            }
        ]
    },
    {
        "ID": "8",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": "rabbit",
        "LEVEL": "0"
    },
    {
        "ID": "9",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": "rabbit111",
        "LEVEL": "0"
    },
    {
        "ID": "10",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": "rabbit3",
        "LEVEL": "0"
    },
    {
        "ID": "11",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": " test4",
        "LEVEL": "0"
    },
    {
        "ID": "12",
        "PID": "0",
        "AL_ID": "0",
        "ANAME": "rabbit789",
        "LEVEL": "0"
    }
]


const idToMatch = '6';
const parentsArray = findParentNodes(treeData, idToMatch);
console.log(parentsArray); // 输出匹配节点的父级数组