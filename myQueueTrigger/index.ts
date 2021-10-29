import { AzureFunction, Context } from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, myQueueItem: string): Promise<void> {
    context.log('Queue trigger function processed work items', myQueueItem);
};

export default queueTrigger;
