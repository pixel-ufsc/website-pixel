import FormasDeContato from '../formas-de-contato/formas-de-contato.component';
import FormularioContato from '../formulario-contato/formulario-contato.component';
import styles from './container-contato.module.css'

export default function ContainerContato() {
    return (
        <div className={styles.containerContato}> 
            <FormularioContato />
            <FormasDeContato />
        </div>
    );
}