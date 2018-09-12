//假定线性表的元素类型是ElemType,线性表的顺序存储类型描述为
#define MaxSize 50          //定义线性表的最大长度
typedef struct{            
    ElemType data{MaxSize}; //顺序表的元素
    int length;             //顺序表的当前长度
}SqList;                    //顺序表的类型定义

#define InitSize 100    //表长度的初始定义
typedef struct{           
    ElemTyoe *data;       //指示动态分配数组的指针
    int Maxsize,length;   //数组的最大容量和当前个数
} SeqList;                //动态分配数组顺序表的类型定义

bool ListInsert(Sqlist &L,int i,ElemType e){
    if(i<1||i>L.length+1)
        return false;
    if(L.length>=MaxSize)
        return false;
    for(int j=L.length;j>=1,j--)
        L.data[j]=L.data[j-1];
    L.data[i-1]=e;
    L.length++;
    return true;
}

bool ListDelete(Sqlist &L,int i,int &e){
    if(i<1||i>L.length+1)
        return false;
    e=L.data[i-1];
    for(int j=i;j<L.length;j++)
        L.data[j-1]=L.data[j];
    L.length--;
    return true;
}

int LocateElem(Sqlist L,ElemType e){
    int i;
    for(i=0;i<L.length;i++)
        if(L.data[i]==e)
            return i+1;
    return 0;
}