export interface IDemoProps {
    window?: () => Window;
}


export type NavigationItem = {
    segment: string;
    title: string;
    icon: React.ComponentType;
};