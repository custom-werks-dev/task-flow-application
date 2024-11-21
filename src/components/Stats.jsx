import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useSelector } from 'react-redux';

export default function Stats({ category }) {
    const contactListData = useSelector(
        (state) => state.contact.contactList
    );

    const noOfContacts = contactListData?.filter(
        (contact) =>
            contact.gender === category ||
            contact.contactType === category
    );

    return (
        <Card className="w-[200px]">
            <CardHeader className="pb-2">
                <CardDescription className="capitalize">
                    {category} Contacts
                </CardDescription>
                <CardTitle className="text-3xl">
                    {noOfContacts?.length}
                </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
        </Card>
    );
}
