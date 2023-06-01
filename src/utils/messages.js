import { nanoid } from 'nanoid'

export const messages = {
    selectedChat: null,
    filteredActive: [],
    filteredQueue: [],
    filteredCompleted: [],
    active: [
        {
            id: nanoid(),
            clientOrganization: 'Westworld',
            clientName: 'William Doe',
            clientAvatar: '',
            source: 'facebook',
            assignedTo: 'Dolores Abernathy',
            messages: [
                {
                    sentAt: '12/01/2022, 4:30 PM',
                    message: 'What can you tell me about this product',
                    sentBy: 'client'
                },
                {
                    sentAt: '12/01/2022, 4:40 PM',
                    message: 'We will get back to you shortly',
                    sentBy: 'agent'
                },
                {
                    sentAt: '12/01/2022, 4:53 PM',
                    message: 'I had a few questions about your product',
                    sentBy: 'client'
                },
            ]
        },
        {
            id: nanoid(),
            clientOrganization: 'info@westworld.com',
            clientName: 'charlotte@hale.com',
            clientAvatar: '',
            source: 'email',
            subject: 'Check Availability',
            assignedTo: 'Maeve Millay',
            messages: [
                {
                    sentAt: '12/02/2022, 1:30 PM',
                    message: 'Is this available?',
                    sentBy: 'client',
                    subject: 'Check Availability',
                    files: [{ name: 'image.png', size: '1.2MB' }]
                },
                {
                    sentAt: '12/02/2022, 1:40 PM',
                    message: 'We need to check. We will get back to you shortly.',
                    sentBy: 'agent',
                    subject: 'Check Availability',
                    files: []
                },
                {
                    sentAt: '12/02/2022, 1:53 PM',
                    message: 'Could you do it by tomorrow?',
                    sentBy: 'client',
                    subject: 'Check Availability',
                    files: []
                }
            ]
        },
        {
            id: nanoid(),
            clientOrganization: 'Westworld',
            clientName: '+12417543010',
            clientAvatar: '',
            source: 'whatsapp',
            assignedTo: 'Teddy Flood',
            messages: [
                {
                    sentAt: '12/02/2022, 1:30 PM',
                    message: 'I want to buy this product',
                    sentBy: 'client'
                },
                {
                    sentAt: '12/02/2022, 1:40 PM',
                    message: 'The current price is $100',
                    sentBy: 'agent'
                },
                {
                    sentAt: '12/02/2022, 1:53 PM',
                    message: 'Do you have a discount?',
                    sentBy: 'client'
                },
            ]
        },
    ],
    queue: [
        {
            id: nanoid(),
            clientOrganization: 'Westworld',
            clientName: '+12416592510',
            clientAvatar: '',
            source: 'whatsapp',
            messages: [
                {
                    sentAt: '12/03/2022, 5:30 PM',
                    message: 'I have a complaint about your product',
                    sentBy: 'client'
                }
            ]
        },
        {
            id: nanoid(),
            clientOrganization: 'info@westworld.com',
            clientName: 'caleb@nichols.com',
            clientAvatar: '',
            source: 'email',
            subject: 'Check Availability',
            messages: [
                {
                    sentAt: '12/02/2022, 1:30 PM',
                    message: 'Is this available?',
                    sentBy: 'client',
                    subject: 'Check Availability',
                    files: []
                }
            ]
        },
    ],
    completed: [
        {
            id: nanoid(),
            clientOrganization: 'info@westworld.com',
            clientName: 'emily@grace.com',
            clientAvatar: '',
            source: 'email',
            subject: 'Questions about the product',
            messages: [
                {
                    sentAt: '11/01/2022, 10:05 PM',
                    message: 'I had a few questions about this product',
                    sentBy: 'client',
                    subject: 'Questions about the product',
                    files: []
                },
                {
                    sentAt: '11/01/2022, 10:20 PM',
                    message: 'This product is available in our store at 1234 Main Street',
                    sentBy: 'agent',
                    subject: 'Questions about the product',
                    files: []
                },
                {
                    sentAt: '11/01/2022, 10:25 PM',
                    message: 'Is it available in other colors?',
                    sentBy: 'client',
                    subject: 'Questions about the product',
                    files: []
                },
                {
                    sentAt: '11/01/2022, 10:30 PM',
                    message: 'Unfortunately, it is only available in black',
                    sentBy: 'agent',
                    subject: 'Questions about the product',
                    files: []
                },
                {
                    sentAt: '11/01/2022, 10:40 PM',
                    message: 'Okay, thank you for your help',
                    sentBy: 'client',
                    subject: 'Questions about the product',
                    files: []
                },
            ]
        },
        {
            id: nanoid(),
            clientOrganization: 'Westworld',
            clientName: 'Lucy Sanders',
            clientAvatar: '',
            source: 'facebook',
            messages: [
                {
                    sentAt: '11/05/2022, 8:00 AM',
                    message: 'When will this be available?',
                    sentBy: 'client'
                },
                {
                    sentAt: '11/05/2022, 8:30 AM',
                    message: 'It will be back in stock in 2 weeks',
                    sentBy: 'agent'
                },
                {
                    sentAt: '11/05/2022, 8:53 AM',
                    message: 'Awesome, thank you',
                    sentBy: 'client'
                },
            ]
        },
    ]
}

export const { active, queue, completed } = messages