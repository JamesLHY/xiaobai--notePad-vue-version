type RootState = {
    recordList: RecordItem[];
    createRecordError: Error | null;
    createTagError: Error | null;
    tagList: Tag[];
    currentTag?: Tag;
}

type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createdTime?: string;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => string;
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;

}

