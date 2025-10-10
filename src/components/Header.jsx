import { NavLink } from 'react-router';
import useMenuByTitle from '../hooks/useMenuByTitle';

export default function Header() {
  const { menuSet, loading, error } = useMenuByTitle("Simple Menu");
  const baseUrl = window.location.origin;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!menuSet) return <p>No menu found</p>;

  const linkBaseStyle = "text-vp-gray-400 text-sm font-medium hover:underline"

  return (
    <header className="flex gap-4 fixed z-50 m-4 w-fit">
      <nav>
        <img src="/vp-logo.svg" alt="VP Logo" className='h-6 w-fit' />
      </nav>
      <ul className="space-y-2 flex gap-4">
        {menuSet.customMenuSets?.menuItems?.map((itemGroup, i) => (
          <li key={i}>
            {itemGroup.topLevelLink?.nodes?.map((link) => {
              // define it inside this map, so "link" is in scope
              const topLevelLink = `${baseUrl}${link.customMenuLinks?.subpath || ''}`;

              return (
                <div key={link.id} className="mb-2">
                  <NavLink
                    to={topLevelLink}
                    target={link.customMenuLinks?.openNewTab ? '_blank' : '_self'}
                    className={linkBaseStyle}
                  >
                    {link.title}
                  </NavLink>

                  {itemGroup.nestedLinks?.nodes?.length > 0 && (
                    <ul className="ml-4 mt-2 space-y-1 list-inside">
                      {itemGroup.nestedLinks.nodes.map((nested) => {
                        const nestedLink = `${topLevelLink}${nested.customMenuLinks?.subpath || ''}`;

                        return (
                          <li key={nested.id}>
                            <NavLink
                              to={nestedLink}
                              target={nested.customMenuLinks?.openNewTab ? '_blank' : '_self'}
                              className={linkBaseStyle}
                            >
                              {nested.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </header>
  );
}