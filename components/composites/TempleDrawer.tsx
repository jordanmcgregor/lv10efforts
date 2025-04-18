import SubmissionForm from '@/components/composites/TempleSubmission';
import { Button } from '@/components/tremor/Button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/tremor/Dialog";
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/tremor/Drawer';

export default function TempleDrawer({
    temple,
    slug,
}: {
    temple: any;
    slug: string;
}) {
    return (
        <div className="flex justify-center">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="w-full" variant="primary">Temple Names Submission</Button>
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-lg">
                    <DrawerHeader>
                        <DrawerTitle>Temple Names Submission Form</DrawerTitle>
                        <DrawerDescription className="mt-1 text-sm">
                            Fill out this form, and the word cloud will update with the new numbers along with past data.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerBody>
                        <SubmissionForm temple={temple} slug={slug} />
                    </DrawerBody>
                    {/* <DrawerFooter className="mt-6">
                        <DrawerClose asChild>
                            <Button
                                className="mt-2 w-full sm:mt-0 sm:w-fit"
                                variant="primary"
                            >
                                Go back
                            </Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button className="w-full sm:w-fit">Ok, got it!</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </div>
    )
};