import Esquerda from './Esquerda/esquerda';
import Sidebar from './Sidebar/sidebar';

export default function Corpo(){
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    );
}