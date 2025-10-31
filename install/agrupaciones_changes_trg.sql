CREATE OR REPLACE TRIGGER changes_trg
    AFTER INSERT OR DELETE OR UPDATE
    ON ccc.agrupaciones
    FOR EACH ROW
    EXECUTE FUNCTION his.changes_trg('agrupacion');