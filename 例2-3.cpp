typedef struct LNode
{
    int data;
    struct Lnode *next;
}LNode;

void merge (LNode *A,LNode *B,LNode *&C)
{
    LNode *p= A->next;
    LNode *q= B->next;
    LNode *r;
    C=A;
    C->next=NULL;
    free(B);
    r=C;
}


