import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';

interface AppLogoProps {
    className?: string;
}

export default function AppLogo({ className }: AppLogoProps) {
    const { name } = usePage().props as { name: string };

    return (
        <div className={cn('flex items-center', className)}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate font-semibold leading-tight">{name}</span>
            </div>
        </div>
    );
}
